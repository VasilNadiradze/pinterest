import { useSearchParams } from "react-router";
import Gallery from "../../components/gallery/Gallery";
import "./searchpage.css";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return (
    <div className="SearchPage">
      <Gallery search={search} />
    </div>
  );
};

export default SearchPage;
