import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

import '../UserPage.css'


function RequestItem({ song }) {
  const history = useHistory();
  const requestClick = () => {
    history.push(`/details/${song.id}`);
  };
  const now = new Date ();
  const msPerDay = 24 * 60 * 60 * 1000;
  const creationTime = new Date (song.created_at);
  const daysLeft = Math.round((now.getTime() - creationTime.getTime()) / msPerDay);


  if (song.is_complete) {
    return (
      <Card
        sx={{
          minWidth: 900,
          display: "flex",
          flexDirection: "row",
          outline: "#feaf17 solid 4px",
          justifyContent: "space-between",
          gap: 2,
          mb: 3,
          backgroundColor: "#fff4df",
          p: 2
        }}
        onClick={requestClick}
      >
        <CardActionArea>
          <div className="event-item-header">
            <h2>COMPLETE! Click to view your song</h2>
          </div>
          <div className="event-item">
            <img width={80} src="bee-button.png" />
            <div>
              <p>Your song for {song.recipient}</p>
              <p>
                Ordered on{" "}
                {new Date(song.created_at).toLocaleDateString("en-us")}
              </p>
            </div>
            <button className="detailsBtn">Details</button>
          </div>
        </CardActionArea>
      </Card>
    );
  } else {
    return (
      <Card
        sx={{
          width: 900,
          display: "flex",
          flexDirection: "row",
          outline: "#feaf17 solid 4px",
          justifyContent: "space-around",
          gap: 2,
          mb: 3,
          backgroundColor: "#fff4df",
          p: 2
        }}
        onClick={requestClick}
      >
        <CardActionArea>
        <div className="event-item-header">
            <h2>PENDING... Due in {song.delivery_days - daysLeft} days</h2>
          </div>
          <div className="event-item">
            <img width={80} src="bee-button.png" />
            <div>
              <p>Your song for {song.recipient}</p>
              <p>
                Ordered on{" "}
                {new Date(song.created_at).toLocaleDateString("en-us")}
              </p>
            </div>
            <button className="detailsBtn">Details</button>
          </div>
        </CardActionArea>
      </Card>
    );
  }
}

export default RequestItem;
