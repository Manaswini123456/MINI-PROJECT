import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      name: "Vembanad House Homestay",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      destination: "Vembanad-Kerala",
      description: "The Vembanad House has an 800 m of waterfront with fishing options, an extensive farmland to meet the needs of the residents, and an array of activities to provide for that feel of traveling while staying home. Also, there are rooms for every budget.",
      price: 7850,
      date:"12-10-2022 to 03-12-2022",
      review: 9.2
    }
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">IMAGE</TableCell>
            <TableCell className="tableCell">NAME</TableCell>
            <TableCell className="tableCell">DESTINATION</TableCell>
            <TableCell className="tableCell">DESCRIPTION</TableCell>
            <TableCell className="tableCell">PRICE(IN Rs.)</TableCell>
            <TableCell className="tableCell">AVAILABLE</TableCell>
            <TableCell className="tableCell">REVIEW</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.destination}</TableCell>
              <TableCell className="tableCell">{row.description}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.review}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;