import * as Types from './schema';

export type AllActivitiesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllActivitiesQuery = { __typename?: 'Query', allActivities?: Array<{ __typename?: 'Activity', id: string, title: string, description: string, price: number, kidPrice: number, day: string, month: string, fullMonth: string, age: string, duration: string, accessible: boolean, place: string, street: string, houseNumber: string, mapsLink: string, starsValue: number, reviewAmount: number, imageUrl: string, hostImg: string, joined1: string, joined2: string, joined3: string, bought: boolean, beginTime: string, endTime: string, ticketAmount: number } | null> | null };

export type ActivityCardFragment = { __typename?: 'Activity', id: string, title: string, description: string, price: number, kidPrice: number, day: string, month: string, fullMonth: string, age: string, duration: string, accessible: boolean, place: string, street: string, houseNumber: string, mapsLink: string, starsValue: number, reviewAmount: number, imageUrl: string, hostImg: string, joined1: string, joined2: string, joined3: string, bought: boolean, beginTime: string, endTime: string, ticketAmount: number };

export type ActivityQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type ActivityQuery = { __typename?: 'Query', Activity?: { __typename?: 'Activity', id: string, title: string, description: string, price: number, kidPrice: number, day: string, month: string, fullMonth: string, age: string, duration: string, place: string, street: string, houseNumber: string, mapsLink: string, accessible: boolean, starsValue: number, reviewAmount: number, imageUrl: string, hostImg: string, joined1: string, joined2: string, joined3: string, bought: boolean, beginTime: string, endTime: string, ticketAmount: number } | null };

export type ActivityStateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  bought: Types.Scalars['Boolean'];
  ticketAmount?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type ActivityStateMutation = { __typename?: 'Mutation', updateActivity?: { __typename?: 'Activity', id: string, title: string, description: string, price: number, kidPrice: number, day: string, month: string, fullMonth: string, age: string, duration: string, accessible: boolean, place: string, street: string, houseNumber: string, mapsLink: string, starsValue: number, reviewAmount: number, imageUrl: string, hostImg: string, joined1: string, joined2: string, joined3: string, bought: boolean, beginTime: string, endTime: string, ticketAmount: number } | null };
