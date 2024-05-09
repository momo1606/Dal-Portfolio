// Author: Zainuddin Saiyed

import { Box, Link, Stack, Typography } from "@mui/material";
import { Icon } from "components";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useOnMobile, useOnTablets } from "hooks";

type Props = {
  id: string;
  portfolio: any;
};

const Bio = ({ id, portfolio }: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();

  return (
    <section
      id={id}
      style={{ minHeight: "100vh", padding: "3rem", display: "flex" }}
    >
      <Box sx={{ my: "auto" }}>
        <Box sx={{ marginBottom: 5 }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: onMobile? "3rem": "5rem",
              lineHeight: onMobile? "3.5rem":"5.5rem",
              fontWeight: 700,
            }}
          >
            {portfolio.bio?.first_name.toUpperCase() +
              " " +
              portfolio.bio?.last_name.toUpperCase()}
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {portfolio.bio?.address && portfolio.bio?.city && portfolio.bio?.country && (
              <>
                {portfolio.bio.address}, {portfolio.bio.city}, {portfolio.bio.country}
              </>
            )}
            {portfolio.bio?.email && (
              <Link href={`mailto:${portfolio.bio.email}`} style={{ marginLeft: "1rem" }}>
                <AlternateEmailIcon
                  style={{
                    verticalAlign: "middle",
                    marginRight: "0.25rem",
                    color: "#fcd405",
                  }}
                />
                {portfolio.bio.email}
              </Link>
            )}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "2rem", textAlign: 'justify' }}>
          <Typography>{portfolio.bio.about}</Typography>
        </Box>
        <Stack direction={"row"} spacing={2}>
          {!!portfolio?.bio?.twitter && (
            <a
              href={portfolio.bio?.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <Icon name="twitter" sx={{ fontSize: "30px" }} />
            </a>
          )}
          {!!portfolio?.bio?.linkedin && ( 
            <a
              href={portfolio.bio?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <Icon name="linkedin" sx={{ fontSize: "30px" }} />
            </a>
          )}
          {!!portfolio?.bio?.github && ( 
            <a
              href={portfolio.bio?.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <Icon name="github" sx={{ fontSize: "30px" }} />
            </a>
          )}
          {!!portfolio?.bio?.gscholar && ( 
            <a
              href={portfolio.bio?.gscholar}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <Icon name="education" sx={{ fontSize: "30px" }} />
            </a>
          )}
          {!!portfolio?.bio?.facebook && ( 
            <a
              href={portfolio.bio?.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <Icon name="facebook" sx={{ fontSize: "30px" }} />
            </a>
          )}

          {!!portfolio?.bio?.instagram && ( 
            <Icon
              component={"a"}
              href="portfolio.bio?.instagram"
              style={{ color: "inherit" }}
              name="instagram"
              sx={{ fontSize: "30px" }}
            />
          )}
          {!!portfolio?.bio?.youtube && ( 
            <a
              href={portfolio.bio?.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <Icon name="youtube" sx={{ fontSize: "30px" }} />
            </a>
          )}
        </Stack>
      </Box>
    </section>
  );
};

export default Bio;