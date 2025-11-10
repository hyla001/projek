"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Search, FileText, Wrench } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface SearchResult {
  id: string
  title: string
  description?: string
  category: string
  url: string
}

export function SearchCommand() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Keyboard shortcut to open search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Debounced search function
  const searchDebounced = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([])
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      setResults(data.results || [])
    } catch (error) {
      console.error("[v0] Search error:", error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      searchDebounced(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, searchDebounced])

  const handleSelect = (url: string) => {
    setOpen(false)
    setQuery("")
    router.push(url)
  }

  const getCategoryIcon = (category: string) => {
    if (category === "Berita") return <FileText className="w-4 h-4" />
    return <Wrench className="w-4 h-4" />
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative flex items-center w-full max-w-sm h-10 px-3 text-sm text-muted-foreground bg-secondary border border-border rounded-md hover:bg-secondary/80 transition-colors"
      >
        <Search className="w-4 h-4 mr-2" />
        <span>Cari layanan...</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Cari layanan, brand, atau berita..." value={query} onValueChange={setQuery} />
        <CommandList>
          {isLoading && <div className="py-6 text-center text-sm text-muted-foreground">Mencari...</div>}

          {!isLoading && query.length >= 2 && results.length === 0 && (
            <CommandEmpty>Tidak ada hasil ditemukan.</CommandEmpty>
          )}

          {!isLoading && results.length > 0 && (
            <>
              {/* Group by category */}
              {["Layanan", "Brand HP", "Brand TV", "Brand Laptop", "Layanan Lainnya", "Berita"].map((category) => {
                const categoryResults = results.filter((r) => r.category === category)
                if (categoryResults.length === 0) return null

                return (
                  <CommandGroup key={category} heading={category}>
                    {categoryResults.map((result) => (
                      <CommandItem key={result.id} onSelect={() => handleSelect(result.url)} className="cursor-pointer">
                        {getCategoryIcon(result.category)}
                        <div className="flex flex-col ml-2">
                          <span className="font-medium">{result.title}</span>
                          {result.description && (
                            <span className="text-xs text-muted-foreground line-clamp-1">{result.description}</span>
                          )}
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )
              })}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
