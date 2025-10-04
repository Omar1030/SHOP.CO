import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          // boxShadow: "none",
          // border: "1px solid #ccc",
        },
      },
    },
  },
});

const FAQs = () => {
  return (
    <div className="container mx-auto px-4">
      <ThemeProvider theme={theme}>
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "black" }} />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span" style={{ fontWeight: "600" }}>
              How long does delivery take?
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography style={{ color: "var(--text-gray)", fontWeight: "bold" }}>Standard delivery usually takes 3–7 business days, while express shipping takes 1–3 business days depending on your location.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "black" }} />} aria-controls="panel2-content" id="panel2-header">
            <Typography component="span" style={{ fontWeight: "600" }}>
              Do you offer international shipping?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: "var(--text-gray)", fontWeight: "bold" }}>Yes, we ship worldwide. Shipping costs and delivery times vary depending on the destination.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "black" }} />} aria-controls="panel2-content" id="panel2-header">
            <Typography component="span" style={{ fontWeight: "600" }}>
              How can I track my order?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: "var(--text-gray)", fontWeight: "bold" }}>Once your order is shipped, you’ll receive a tracking number via email or SMS to monitor your package in real time.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "black" }} />} aria-controls="panel2-content" id="panel2-header">
            <Typography component="span" style={{ fontWeight: "600" }}>
              Can I return or exchange an item?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: "var(--text-gray)", fontWeight: "bold" }}>Yes. We accept returns and exchanges within 14 days of delivery, as long as items are unused, unwashed, and with tags attached.</Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
};

export default FAQs;
