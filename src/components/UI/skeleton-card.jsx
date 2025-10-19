import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonCard() {
  return (
    <Stack>
      <Skeleton sx={{ borderRadius: "5px", minidth: "175px" }} animation="wave" variant="card" height={250} />
      <Skeleton sx={{ borderRadius: "5px", minidth: "175px" }} animation="wave" variant="text" />
      <Skeleton sx={{ borderRadius: "5px", minidth: "175px" }} animation="wave" variant="text" />
    </Stack>
  );
}
