import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import StatisticsCard from '../../components/cards/StatisticsCard';
import { BiUser } from 'react-icons/bi';
import PageWrapper from '../../components/page/PageWrapper';
import PageTitle from '../../components/page/PageTitle';
import DataTable from '../../components/table/DataTable';
const randomDarkColors: string[] = [
  '#F94144',
  '#F3722C',
  '#F8961E',
  '#F9844A',
  '#F9C74F',
  '#90BE6D',
  '#43AA8B',
  '#4D908E',
  '#577590',
  '#277DA1',
];
const columns=[{ field: 'id' }, { field: 'name' }, { field: 'age' }];
const rows=[
  { id: '1', name: 'ahmed', age: 22 },
  { id: '2', name: 'ali', age: 25 },
]
const Home = () => {
  const [page, setPage] = useState<any>(1);
  return (
    <PageWrapper>
      <PageTitle title="الرئيسية" />
      <Stack direction="row" justifyContent="center" gap="12px" flexWrap="wrap">
        <StatisticsCard
          title="عدد المستخدمين"
          value={1000}
          Icon={BiUser}
          color={randomDarkColors[0]}
        />
        <StatisticsCard
          title="عدد المقدمين"
          value={1000}
          Icon={BiUser}
          color={randomDarkColors[1]}
        />
        <StatisticsCard
          title="عدد البرامج"
          value={1000}
          Icon={BiUser}
          color={randomDarkColors[2]}
        />
        <StatisticsCard
          title="عدد المقالات"
          value={1000}
          Icon={BiUser}
          color={randomDarkColors[3]}
        />
        <StatisticsCard
          title="عدد المستخدمين"
          value={1000}
          Icon={BiUser}
          color={randomDarkColors[4]}
        />
        <StatisticsCard
          title="عدد المستخدمين"
          value={900}
          Icon={BiUser}
          color={randomDarkColors[0]}
        />
        <DataTable rows={rows} columns={columns} page={page} setPage={setPage} itemsPerPage={1} totalItems={2}/>
      </Stack>
    </PageWrapper>
  );
};
export default Home;
