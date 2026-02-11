import { useEffect } from "react"

const useSEO = ({
  title = "Default Title",
  description = "Default Description",
}) => {
  useEffect(() => {
    document.title = title

    let metaDescription = document.querySelector(
      "meta[name='description']"
    )

    if (!metaDescription) {
      metaDescription = document.createElement("meta")
      metaDescription.name = "description"
      document.head.appendChild(metaDescription)
    }

    metaDescription.content = description
  }, [title, description])
}

export default useSEO
