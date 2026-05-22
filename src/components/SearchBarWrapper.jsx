import { buildSearchIndex } from "@/lib/searchIndexData";
import SearchBar from "@/components/SearchBar";

export default function SearchBarWrapper({ className }) {
  const searchIndex = buildSearchIndex();
  return <SearchBar className={className} searchIndex={searchIndex} />;
}
