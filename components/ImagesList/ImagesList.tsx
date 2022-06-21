import React, { useEffect, useState } from "react";
import { Image } from "../../models/image";
import styles from "./ImagesList.module.scss";

interface ImageListProps {
  lastElementRef: (query: HTMLDivElement) => void;
  images: Array<Image>;
  setImages: React.Dispatch<React.SetStateAction<Array<Image>>>;
  imageLoaded: boolean;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImagesList = ({
  lastElementRef,
  images,
  setImages,
  imageLoaded,
  setImageLoaded,
}: ImageListProps) => {
  const deleteImage = (id: number) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className={styles["images-list"]}>
      {images?.map((image, index: number) => {
        const indexNumber = index;
        return (
          <div
            key={indexNumber}
            ref={lastElementRef}
            className={`${styles["images-list__item"]}
              ${
                imageLoaded
                  ? styles["images-list__item--visible"]
                  : styles["images-list__item--hidden"]
              }`}
          >
            <img
              src={image.thumbnailUrl}
              alt="thumbnail"
              onLoad={() => setImageLoaded(true)}
              onClick={() => deleteImage(image.id)}
              width={150}
              height={150}
            />
            <p>{image.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImagesList;
