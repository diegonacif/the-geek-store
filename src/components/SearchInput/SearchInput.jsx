import { MagnifyingGlass } from "phosphor-react"

export const SearchInput = () => {
  return (
    <div className="search-input-container">
      <input type="text" placeholder="BUSCAR" />
      <div className="search-icon-wrapper">
        <MagnifyingGlass size={24} color="#f1f1f1" weight="duotone" />
      </div>
    </div>
  )
}