import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import useTransactions from "../../services/services";

const Details = ({title}:any) => {
  const { total } = useTransactions(title);
  return (
      <Card>
          <CardHeader title={title} />
          <CardContent>
              <Typography variant="h5">RM {total}</Typography>
          </CardContent>
      </Card>
  )
}
export default Details;
