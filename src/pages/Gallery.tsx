import galleryData from '../data/gallery.json';
import type { GalleryItem } from '../data/gallery';

const galleryItems = galleryData as GalleryItem[];

function Gallery() {
  return (
    <section>
      <h1>Gallery</h1>

      <p>
        This page includes visual examples and screenshots from my web
        development projects.
      </p>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article className="gallery-item" key={item.title}>
            {item.image && (
              <img src={item.image} alt={item.alt} className="gallery-image" />
            )}

            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;