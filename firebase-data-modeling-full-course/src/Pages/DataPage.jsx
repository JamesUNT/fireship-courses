import { useEffect, useState } from "react";
import { fetchingAllTagsDocuments } from "../utils"

const ReadingData = () => {

  const [tags, setTags] = useState([])

  async function fetchingAllTags() {
    const result = await fetchingAllTagsDocuments();
    setTags(result)
  }

  useEffect(() => {
    fetchingAllTags()
  }, [])
  
  return (
    <>
      {
        tags.map(
          (tag, index) =><p key={index}>{tag}</p>
        )
      }
    </>
  )
}

export default ReadingData;