import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailItem from "../../components/original/DetailItem";
import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.main`
  width: 100%;
  height: 100%;
  color: #fff;
  &::before {
    content: "";
    padding: 0;
    background: #0e100f
      url("https://cdn.prod.website-files.com/66830a26921cfac79c4c2c9c/668fa5303a4db2a0e1253a6f_bg.png")
      center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    filter: brightness(0.2) contrast(1.1);
    z-index: -1;
  }
  .loading {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--ott-bg-color);
    color: var(--light-color);
  }
`;

/*--- 출력 ---*/
const OriginalDetail = () => {
  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("/API/originalData.json")
      .then((response) => response.json())
      .then((data) => {
        const item = data.originalData.find((item) => String(item.id) === id);
        setSelectedItem(item);
      });
  }, [id]);

  return (
    <Container>
      <section>
        {!selectedItem ? (
          <div className="loading">Loading...</div>
        ) : (
          <DetailItem
            id={selectedItem.id}
            starName={selectedItem.starName}
            detailImg={selectedItem.detailImg}
            episode={selectedItem.episode}
            thumbnail={selectedItem.thumbnail}
            subTitle={selectedItem.subTitle}
            mainTitle={selectedItem.mainTitle}
            description={selectedItem.description}
            keyword={selectedItem.keyword}
            characterKeyword={selectedItem.characterKeyword}
            characterName={selectedItem.characterName}
            bagThumbnail={selectedItem.bagThumbnail}
            items={selectedItem.items}
            shorts={selectedItem.shorts}
            videoUrl={selectedItem.videoUrl}
          />
        )}
      </section>
    </Container>
  );
};

export default OriginalDetail;
