import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import useTransactions from "../../../services/services";
import { formatCurrency } from "../../../utils/utils";
import './Details.css';

const Details = ({title}:any) => {
  const { total, chartData } = useTransactions(title);
  return (
      <Card title={title} className={title === 'Income' ? 'income' : 'expense'}>   
          <CardHeader title={title} />
          <CardContent>
              <Typography variant="h5">RM {formatCurrency(total)}</Typography>
              <Chart type='doughnut' data={chartData} />
          </CardContent>
      </Card>
  )
}
export default Details;
