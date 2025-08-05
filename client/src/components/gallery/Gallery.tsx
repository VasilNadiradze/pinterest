import "./gallery.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import GalleryItem from "../galleryItem/GalleryItem";
import type { QueryFunctionContext } from "@tanstack/react-query";
import type { FetchPinsParams, GalleryProps } from "../../types";

const fetchPins = async ({
  pageParam,
  search,
  userId,
  boardId,
}: FetchPinsParams) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${
      search || ""
    }&userId=${userId || ""}&boardId=${boardId || ""}`
  );
  return res.data;
};

const Gallery = ({ search, userId, boardId }: GalleryProps) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins", search, userId, boardId],
    queryFn: ({
      pageParam = 0,
      queryKey,
    }: QueryFunctionContext<(string | undefined)[], number>) => {
      const [, searchParam, userIdParam, boardIdParam] = queryKey;
      return fetchPins({
        pageParam,
        search: searchParam,
        userId: userIdParam,
        boardId: boardIdParam,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  if (status === "pending") return "Loading";
  if (status === "error") return "Something went wrong...";

  const allPins = data?.pages.flatMap((page) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more pins</h4>}
      endMessage={<h3>All Posts Loaded!</h3>}
    >
      <div className="gallery">
        {allPins.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
