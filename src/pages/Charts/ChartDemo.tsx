import { useEffect, useState } from "react";
import axios from "axios";
import { 
  ChartBottom,
  ChartMiddle, 
  ChartTop 
} from "components/ChartList";
import { Loading } from "components/ChartDemo";

// const sleep = (ms: number) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

const ChartDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<any>();

  const getApi = async () => {
    setIsLoading(true);
    const res = await axios.get("http://localhost:3001/chart");
    // await sleep(5000);
    setState(res.data);
    setIsLoading(false);
  };
  
  useEffect(() => {
    getApi();
  }, []);
  return (
    <section className="container">
      {isLoading || !state ? (
        <Loading />
      ) : (
        <>
          <ChartTop 
            status={state?.totalBooking}
          />
          <ChartMiddle
            lineData={state?.totalIncomes.data}
            percent={state?.totalIncomes.percent}
            total={state?.totalIncomes.total}
            bookedRoom={state?.bookedRoom}
            donut={state?.donut}
            donutSmall={state?.donutSmall}
          />
          <ChartBottom 
            columnData={state?.reservation} 
            numberReviews={state?.customer.numberReviews}
            name={state?.customer.name}
            paragraph={state?.customer.paragraph}
            images={state?.customer.images}
          />
        </>
      )}
    </section>
  );
};

export default ChartDemo;
