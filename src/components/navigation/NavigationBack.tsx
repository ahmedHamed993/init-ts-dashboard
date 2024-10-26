import { Breadcrumbs, Button, Stack } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Link = {
  to: string;
  label: string;
};
type Props = {
  links: Link[];
};

const NavigationBack = ({ links }: Props) => {
  return (
    <Stack direction="row" alignItems="center">
      {links.length > 1 ? (
        <ListLinksNavigate links={links} />
      ) : (
        <BackLinkNavigate link={links[0]} />
      )}
    </Stack>
  );
};

export default NavigationBack;

const ListLinksNavigate = ({ links }: Props) => {
  return (
    <Breadcrumbs separator={<FiChevronRight />}>
      {links.map((link) => (
        <Button component={Link} to={link.to} sx={{ cursor: "pointer" }}>
          {link.label}
        </Button>
      ))}
    </Breadcrumbs>
  );
};

const BackLinkNavigate = ({ link }: { link: Link }) => {
  const navigate = useNavigate();
  return link.to === "-1" ? (
    <Button
      onClick={() => navigate(-1)}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",
      }}
    >
      <HiArrowNarrowRight />
      {/* <span>رجوع</span> */}
      <span>{link.label}</span>
    </Button>
  ) : (
    <Button
      component={Link}
      to={link.to}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",
      }}
    >
      <HiArrowNarrowRight />
      {/* <span>رجوع</span> */}
      <span>{link.label}</span>
    </Button>
  );
};
