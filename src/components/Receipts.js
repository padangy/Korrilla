import {useState} from 'react';

const receiptsArr = [
  {
    person: 'Steve',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  },
  {
    person: 'Maddy',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Derrick',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }
];

function Receipts() {
  const [receipts, setReceipts] = useState(receiptsArr);

  function receiptClick(index) {
    let tempReceipts = receipts;
    tempReceipts[index].paid = true;
    console.log(tempReceipts[index]);
    setReceipts(tempReceipts);
  }

  return (
    <div>
      {receipts.map((receipt, index) => {
        return (
          <div className='receipt' key={index} onClick={() => receiptClick(index)}>
            <p>{receipt.person}</p>
            <p>Main: {receipt.order.main}</p>
            <p>Protein: {receipt.order.protein}</p>
            <p>Rice: {receipt.order.rice}</p>
            <p>Sauce: {receipt.order.sauce}</p>
            <p>Drink: {receipt.drink}</p>
            <p>Cost: {receipt.cost}</p>
          </div>);
      })}
    </div>
  );
}

export default Receipts;
