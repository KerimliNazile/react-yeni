
import './App.css';
import Cards from './components/Cards';



function App() {

  const Cardsarray=[
    {
      image:"https://i.pinimg.com/236x/f7/8a/e0/f78ae036a9310b8c24ab5d19ef67ea11.jpg",
      text:"aaaaa",
      title:"123"
  
    },
    {
      image:"https://i.pinimg.com/236x/f7/8a/e0/f78ae036a9310b8c24ab5d19ef67ea11.jpg",
      text:"bbbbb",
      title:"345"
  
    },
    {
      image:"https://i.pinimg.com/236x/f7/8a/e0/f78ae036a9310b8c24ab5d19ef67ea11.jpg",
      text:"dddddd",
      title:"678"
  
    }
  ]


  return (
<>
      
      

      { Cardsarray &&
        Cardsarray.map((item)=>(
          <Cards image={item.image} text={item.text} title={item.title}/> 

        )
        )
      }



</>
  );

}

export default App;
