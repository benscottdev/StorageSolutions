import { useState, useEffect } from "react";

function Result({ data }) {
  const [totalArea, setTotalArea] = useState(0);
  const [storageSize, setStorageSize] = useState(null);
  const [storageCost, setStorageCost] = useState(0.0);

  // Surface area calculation function
  const calculateSurfaceArea = (length, width, height) => {
    return (2 * (length * width + length * height + width * height)) / 10000;
  };

  // Container size decider function
  const calculateStorageContainerSize = (totalArea) => {
    if (totalArea === 0) {
      setStorageSize("Please Input...");
    } else if (totalArea <= 3) {
      setStorageSize("Mini");
      setStorageCost(300);
    } else if (totalArea <= 6) {
      setStorageSize("Small");
      setStorageCost(500);
    } else if (totalArea <= 9) {
      setStorageSize("Medium");
      setStorageCost(800);
    } else if (totalArea <= 12) {
      setStorageSize("Large");
      setStorageCost(1000);
    } else if (totalArea <= 15) {
      setStorageSize("X-Large");
      setStorageCost(1200);
    } else if (totalArea >= 20) {
      setStorageSize("Jumbo");
      setStorageCost(1500);
    }
  };

  // Calculation for totalArea runs when data is updated
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
    calculateStorageContainerSize(calculateTotalArea);
  }, [data]);

  return (
    <div className="result">
      {/* totalArea stores the cm2 of total surface area */}
      <p>
        Total Area (m²): <b>{totalArea.toFixed(2)}</b>
      </p>
      <p>
        Storage Unit Suggestion Size: <b>{storageSize}</b>
      </p>
      <p>
        Total Cost Per Year (AUD): <b>${storageCost.toFixed(2)}</b>
      </p>
    </div>
  );
}
export default Result;
