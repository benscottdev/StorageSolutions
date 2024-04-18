import { useState, useEffect } from "react";

function Result({ data }) {
  const [totalArea, setTotalArea] = useState(0);

  const calculateSurfaceArea = (length, width, height) => {
    return 2 * (length * width + length * height + width * height);
  };

  useEffect(() => {
    const calculateTotalArea = data.reduce((total, item) => {
      const surfaceArea = calculateSurfaceArea(
        item.length,
        item.width,
        item.height
      );
      return total + surfaceArea;
    }, 0);

    setTotalArea(calculateTotalArea);
  }, [data]);

  // Use switch to decide on what size container required
  // Price will be impacted dependant on size
  const calculateStorageContainerSize = () => {
    null;
  };

  // Calculate cost per year @ $100 per m2/year
  const calculateCostPerYear = () => {
    null;
  };

  return (
    <div className="result">
      {/* totalArea stores the cm2 of total surface area */}
      <p>Total Area (cm2): {totalArea}</p>
      <p>Storage Unit Suggestion Size: INPUTHERE</p>
      <p>Total Cost Per Year (AUD): $INPUTHERE</p>
    </div>
  );
}
export default Result;
