import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import StatisticsCard from '../../components/cards/StatisticsCard';
import { BiUser } from 'react-icons/bi';
import PageWrapper from '../../components/page/PageWrapper';
import PageTitle from '../../components/page/PageTitle';
import DataTable from '../../components/table/DataTable';
import SelectSearch from '../../components/form-components/SelectSearch';
import SelectServerSearch from '../../components/form-components/SelectServerSearch';
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
  const options=[{id:1,title:"one"},{id:2, title:"two"}];
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  return (
    <PageWrapper>
      <PageTitle title="الرئيسية" />
      {/* <Stack direction="row" justifyContent="center" gap="12px" flexWrap="wrap">
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
      /> */}
    </PageWrapper>
  );
};
export default Home;
