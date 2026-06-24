import { getRevenueOverview } from "@/lib/actions/ticket";
import ChartView from "./ChartView";
import { BsFillBarChartFill } from "react-icons/bs";

const RevenueOverviewPage = async () => {
  const revenue = await getRevenueOverview();

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex gap-1 items-center">
        <BsFillBarChartFill
          className="text-violet-500"
          size={28}
        />

        <h1 className="font-bold text-xl bg-gradient-to-r dark:from-white from-black via-purple-600 to-blue-600 text-transparent bg-clip-text">
          Revenue Overview
        </h1>
      </div>

      <ChartView revenue={revenue} />
    </div>
  );
};

export default RevenueOverviewPage;