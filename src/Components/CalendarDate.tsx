import { Box, Typography } from "@mui/material";

function CalendarIconWithDate({ day, month }: { day: number; month: string }) {
  return (
    <Box
      sx={{
        minWidth: 48,
        width: 48,
        borderRadius: "8px 8px 0 0 ",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          backgroundColor: "#2D3E0C",
          color: "#fff",
          textAlign: "center",
          py: 0.5,
        }}>
        <Typography fontSize={16} variant="caption">
          {month}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#CDE8B4",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0 0 8px 8px",
        }}>
        <Typography
          fontSize={24}
          variant="h6"
          fontWeight="bold"
          color="#2D3E0C">
          {day}
        </Typography>
      </Box>
    </Box>
  );
}

export default CalendarIconWithDate;
