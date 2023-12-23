import React from 'react';
import { IconType } from 'react-icons';
// mui
import { Stack, Typography } from '@mui/material';
type Props = {
  title: string;
  value: number;
  Icon: IconType;
  color: string;
};
const StatisticsCard = ({ title, value, Icon, color }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="8px"
      sx={{
        padding: '12px 16px',
        boxShadow: 1,
        borderRadius: 1,
        width: '266px',
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: `${color}10`,
          color: color,
          height: '50px',
          width: '50px',
          fontSize: '20px',
          borderRadius: '50%',
        }}
      >
        <Icon />
      </Stack>
      <Stack alignItems="center" flex="1">
        <Typography variant="h6">{value}</Typography>
        <Typography variant="subtitle2" color="#aca7a7">
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StatisticsCard;
