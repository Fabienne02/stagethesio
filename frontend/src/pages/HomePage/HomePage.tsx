import { FC } from "react";
import { Box } from "@mui/material";

import ActivityCard from "../../components/Molecules/ActivityCard";
import ActivityBar from "../../components/HomePage/ActivityBar";
import { useAllActivitiesQuery } from "../../graphql/generated/hooks";
import { notMaybe } from "../../Utils/utils";

const HomePage: FC = () => {
  const { data, loading } = useAllActivitiesQuery();

  return (
    <>
      <ActivityBar />
      <Box display="grid" rowGap={3} mb={3}>
        {data?.allActivities?.filter(notMaybe).map((activity, index) => (
          <ActivityCard
            position={activity.id}
            data={activity}
            image={activity.imageUrl}
            price={activity.price}
            day={activity.day}
            month={activity.month}
            title={activity.title}
            description={activity.description}
            age={activity.age}
            starsValue={activity.starsValue}
            reviewAmount={activity.reviewAmount}
          />
        ))}
      </Box>
    </>
  );
};

export default HomePage;
