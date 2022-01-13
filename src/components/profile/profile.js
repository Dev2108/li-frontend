import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from "@mui/material";



export const AccountProfile = (props) => {
  const { candidate } = props;

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={candidate.profile_pic}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {candidate.full_name}
          </Typography>
          <Typography color="textSecondary" variant="h6">
            {candidate.headline}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            {candidate.location}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {candidate.linkedin_id}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {candidate.email}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {candidate.phone_number}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text" onClick={() => alert("message candidate")}>
          Message
        </Button>
      </CardActions>
    </Card>
  );
};
