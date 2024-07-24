import React from 'react';
import CardView from '../../rec/CardView';
import CardViewRight from '../../rec/CardViewRight';
import image1 from '../../assets/buildings0.png';
import image2 from '../../assets/buildings0.png';
import image3 from '../../assets/buildings0.png';
import './SecondPage.css';

function SecondPage() {
  const cardData = [
    { image: 'https://imageio.forbes.com/blogs-images/jamesconca/files/2019/05/Smokestacks-and-Garbage.jpg?format=jpg&width=1440', title: 'The Detrimental Effects of Industrial Pollution on Nature', description: 'Industrial pollution, a byproduct of rapid industrialization, poses a significant threat to nature and human health. Emissions from factories release harmful chemicals and particulates into the air, contributing to air pollution and respiratory issues. Industrial waste often contaminates water bodies, affecting aquatic life and making water unsafe for human consumption. Soil pollution from industrial activities can degrade land quality, reducing agricultural productivity and harming ecosystems. Additionally, industrial pollution contributes to climate change through the release of greenhouse gases, exacerbating global warming and disrupting weather patterns. The cumulative impact of industrial pollution endangers biodiversity, depletes natural resources, and undermines the ecological balance necessary for a healthy planet.' },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index}>
          <CardView image={card.image} title={card.title} description={card.description} />
          <CardViewRight image='https://www.aljazeera.com/wp-content/uploads/2019/05/6b5a2dddcf9c45e19d0ead3066ab1832_18.jpeg?quality=80' title='The Alarming Impact of Plastic and Waste on Water Pollution' description='Water pollution caused by plastic and other waste is a growing environmental crisis with severe consequences for both aquatic ecosystems and human health. Plastics, which are not biodegradable, accumulate in oceans, rivers, and lakes, creating vast areas of floating debris known as garbage patches. These plastics break down into microplastics, which are ingested by marine life, leading to injury, poisoning, and death. Toxic chemicals from plastic waste, along with other pollutants like industrial chemicals and agricultural runoff, contaminate water sources, making them hazardous for human consumption and harming wildlife. The presence of plastic waste disrupts the natural habitat, affects the food chain, and poses a significant threat to biodiversity. Effective waste management, stricter regulations, and public awareness are crucial to mitigating the impact of plastic pollution on water bodies and ensuring the sustainability of our natural resources.' />
        </div>
      ))}
    </div>
  );
}

export default SecondPage;
