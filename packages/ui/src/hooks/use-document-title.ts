import { useEffect } from "react";

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    // Save original title
    const originalTitle = document.title;
    
    // Update title
    document.title = title ? `${title} | Hashtrade` : "Hashtrade";

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", description);
        document.head.appendChild(metaDescription);
      }
    }

    return () => {
      // Revert title on unmount if needed
      document.title = originalTitle;
    };
  }, [title, description]);
}
