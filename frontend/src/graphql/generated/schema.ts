import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Activity = {
  __typename?: 'Activity';
  accessible: Scalars['Boolean'];
  age: Scalars['String'];
  beginTime: Scalars['String'];
  bought: Scalars['Boolean'];
  day: Scalars['String'];
  description: Scalars['String'];
  duration: Scalars['String'];
  endTime: Scalars['String'];
  fullMonth: Scalars['String'];
  hostImg: Scalars['String'];
  houseNumber: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  joined1: Scalars['String'];
  joined2: Scalars['String'];
  joined3: Scalars['String'];
  kidPrice: Scalars['Int'];
  mapsLink: Scalars['String'];
  month: Scalars['String'];
  place: Scalars['String'];
  price: Scalars['Int'];
  reviewAmount: Scalars['Int'];
  starsValue: Scalars['Int'];
  street: Scalars['String'];
  ticketAmount: Scalars['Int'];
  title: Scalars['String'];
};

export type ActivityFilter = {
  accessible?: InputMaybe<Scalars['Boolean']>;
  age?: InputMaybe<Scalars['String']>;
  age_neq?: InputMaybe<Scalars['String']>;
  beginTime?: InputMaybe<Scalars['String']>;
  beginTime_neq?: InputMaybe<Scalars['String']>;
  bought?: InputMaybe<Scalars['Boolean']>;
  day?: InputMaybe<Scalars['String']>;
  day_neq?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_neq?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  duration_neq?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  endTime_neq?: InputMaybe<Scalars['String']>;
  fullMonth?: InputMaybe<Scalars['String']>;
  fullMonth_neq?: InputMaybe<Scalars['String']>;
  hostImg?: InputMaybe<Scalars['String']>;
  hostImg_neq?: InputMaybe<Scalars['String']>;
  houseNumber?: InputMaybe<Scalars['String']>;
  houseNumber_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  imageUrl?: InputMaybe<Scalars['String']>;
  imageUrl_neq?: InputMaybe<Scalars['String']>;
  joined1?: InputMaybe<Scalars['String']>;
  joined1_neq?: InputMaybe<Scalars['String']>;
  joined2?: InputMaybe<Scalars['String']>;
  joined2_neq?: InputMaybe<Scalars['String']>;
  joined3?: InputMaybe<Scalars['String']>;
  joined3_neq?: InputMaybe<Scalars['String']>;
  kidPrice?: InputMaybe<Scalars['Int']>;
  kidPrice_gt?: InputMaybe<Scalars['Int']>;
  kidPrice_gte?: InputMaybe<Scalars['Int']>;
  kidPrice_lt?: InputMaybe<Scalars['Int']>;
  kidPrice_lte?: InputMaybe<Scalars['Int']>;
  kidPrice_neq?: InputMaybe<Scalars['Int']>;
  mapsLink?: InputMaybe<Scalars['String']>;
  mapsLink_neq?: InputMaybe<Scalars['String']>;
  month?: InputMaybe<Scalars['String']>;
  month_neq?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  place_neq?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  price_gt?: InputMaybe<Scalars['Int']>;
  price_gte?: InputMaybe<Scalars['Int']>;
  price_lt?: InputMaybe<Scalars['Int']>;
  price_lte?: InputMaybe<Scalars['Int']>;
  price_neq?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  reviewAmount?: InputMaybe<Scalars['Int']>;
  reviewAmount_gt?: InputMaybe<Scalars['Int']>;
  reviewAmount_gte?: InputMaybe<Scalars['Int']>;
  reviewAmount_lt?: InputMaybe<Scalars['Int']>;
  reviewAmount_lte?: InputMaybe<Scalars['Int']>;
  reviewAmount_neq?: InputMaybe<Scalars['Int']>;
  starsValue?: InputMaybe<Scalars['Int']>;
  starsValue_gt?: InputMaybe<Scalars['Int']>;
  starsValue_gte?: InputMaybe<Scalars['Int']>;
  starsValue_lt?: InputMaybe<Scalars['Int']>;
  starsValue_lte?: InputMaybe<Scalars['Int']>;
  starsValue_neq?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['String']>;
  street_neq?: InputMaybe<Scalars['String']>;
  ticketAmount?: InputMaybe<Scalars['Int']>;
  ticketAmount_gt?: InputMaybe<Scalars['Int']>;
  ticketAmount_gte?: InputMaybe<Scalars['Int']>;
  ticketAmount_lt?: InputMaybe<Scalars['Int']>;
  ticketAmount_lte?: InputMaybe<Scalars['Int']>;
  ticketAmount_neq?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_neq?: InputMaybe<Scalars['String']>;
};

export type ActivityInput = {
  accessible: Scalars['Boolean'];
  age: Scalars['String'];
  beginTime: Scalars['String'];
  bought: Scalars['Boolean'];
  day: Scalars['String'];
  description: Scalars['String'];
  duration: Scalars['String'];
  endTime: Scalars['String'];
  fullMonth: Scalars['String'];
  hostImg: Scalars['String'];
  houseNumber: Scalars['String'];
  imageUrl: Scalars['String'];
  joined1: Scalars['String'];
  joined2: Scalars['String'];
  joined3: Scalars['String'];
  kidPrice: Scalars['Int'];
  mapsLink: Scalars['String'];
  month: Scalars['String'];
  place: Scalars['String'];
  price: Scalars['Int'];
  reviewAmount: Scalars['Int'];
  starsValue: Scalars['Int'];
  street: Scalars['String'];
  ticketAmount: Scalars['Int'];
  title: Scalars['String'];
};

export type ActivityTicket = {
  __typename?: 'ActivityTicket';
  activityId: Scalars['Int'];
  id: Scalars['ID'];
};

export type ActivityTicketFilter = {
  activityId?: InputMaybe<Scalars['Int']>;
  activityId_gt?: InputMaybe<Scalars['Int']>;
  activityId_gte?: InputMaybe<Scalars['Int']>;
  activityId_lt?: InputMaybe<Scalars['Int']>;
  activityId_lte?: InputMaybe<Scalars['Int']>;
  activityId_neq?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  q?: InputMaybe<Scalars['String']>;
};

export type ActivityTicketInput = {
  activityId: Scalars['Int'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createActivity?: Maybe<Activity>;
  createActivityTicket?: Maybe<ActivityTicket>;
  createManyActivity?: Maybe<Array<Maybe<Activity>>>;
  createManyActivityTicket?: Maybe<Array<Maybe<ActivityTicket>>>;
  removeActivity?: Maybe<Activity>;
  removeActivityTicket?: Maybe<ActivityTicket>;
  updateActivity?: Maybe<Activity>;
  updateActivityTicket?: Maybe<ActivityTicket>;
};


export type MutationCreateActivityArgs = {
  accessible: Scalars['Boolean'];
  age: Scalars['String'];
  beginTime: Scalars['String'];
  bought: Scalars['Boolean'];
  day: Scalars['String'];
  description: Scalars['String'];
  duration: Scalars['String'];
  endTime: Scalars['String'];
  fullMonth: Scalars['String'];
  hostImg: Scalars['String'];
  houseNumber: Scalars['String'];
  imageUrl: Scalars['String'];
  joined1: Scalars['String'];
  joined2: Scalars['String'];
  joined3: Scalars['String'];
  kidPrice: Scalars['Int'];
  mapsLink: Scalars['String'];
  month: Scalars['String'];
  place: Scalars['String'];
  price: Scalars['Int'];
  reviewAmount: Scalars['Int'];
  starsValue: Scalars['Int'];
  street: Scalars['String'];
  ticketAmount: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationCreateActivityTicketArgs = {
  activityId: Scalars['Int'];
};


export type MutationCreateManyActivityArgs = {
  data?: InputMaybe<Array<InputMaybe<ActivityInput>>>;
};


export type MutationCreateManyActivityTicketArgs = {
  data?: InputMaybe<Array<InputMaybe<ActivityTicketInput>>>;
};


export type MutationRemoveActivityArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveActivityTicketArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateActivityArgs = {
  accessible?: InputMaybe<Scalars['Boolean']>;
  age?: InputMaybe<Scalars['String']>;
  beginTime?: InputMaybe<Scalars['String']>;
  bought?: InputMaybe<Scalars['Boolean']>;
  day?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  fullMonth?: InputMaybe<Scalars['String']>;
  hostImg?: InputMaybe<Scalars['String']>;
  houseNumber?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: InputMaybe<Scalars['String']>;
  joined1?: InputMaybe<Scalars['String']>;
  joined2?: InputMaybe<Scalars['String']>;
  joined3?: InputMaybe<Scalars['String']>;
  kidPrice?: InputMaybe<Scalars['Int']>;
  mapsLink?: InputMaybe<Scalars['String']>;
  month?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  reviewAmount?: InputMaybe<Scalars['Int']>;
  starsValue?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['String']>;
  ticketAmount?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateActivityTicketArgs = {
  activityId?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Activity?: Maybe<Activity>;
  ActivityTicket?: Maybe<ActivityTicket>;
  _allActivitiesMeta?: Maybe<ListMetadata>;
  _allActivityTicketsMeta?: Maybe<ListMetadata>;
  allActivities?: Maybe<Array<Maybe<Activity>>>;
  allActivityTickets?: Maybe<Array<Maybe<ActivityTicket>>>;
};


export type QueryActivityArgs = {
  id: Scalars['ID'];
};


export type QueryActivityTicketArgs = {
  id: Scalars['ID'];
};


export type Query_AllActivitiesMetaArgs = {
  filter?: InputMaybe<ActivityFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllActivityTicketsMetaArgs = {
  filter?: InputMaybe<ActivityTicketFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllActivitiesArgs = {
  filter?: InputMaybe<ActivityFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllActivityTicketsArgs = {
  filter?: InputMaybe<ActivityTicketFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Activity: ResolverTypeWrapper<Activity>;
  ActivityFilter: ActivityFilter;
  ActivityInput: ActivityInput;
  ActivityTicket: ResolverTypeWrapper<ActivityTicket>;
  ActivityTicketFilter: ActivityTicketFilter;
  ActivityTicketInput: ActivityTicketInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ListMetadata: ResolverTypeWrapper<ListMetadata>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Activity: Activity;
  ActivityFilter: ActivityFilter;
  ActivityInput: ActivityInput;
  ActivityTicket: ActivityTicket;
  ActivityTicketFilter: ActivityTicketFilter;
  ActivityTicketInput: ActivityTicketInput;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  ListMetadata: ListMetadata;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  accessible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  age?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beginTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bought?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  day?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullMonth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hostImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  houseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  joined1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  joined2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  joined3?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kidPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mapsLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  place?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviewAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  starsValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticketAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityTicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityTicket'] = ResolversParentTypes['ActivityTicket']> = {
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListMetadata'] = ResolversParentTypes['ListMetadata']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationCreateActivityArgs, 'accessible' | 'age' | 'beginTime' | 'bought' | 'day' | 'description' | 'duration' | 'endTime' | 'fullMonth' | 'hostImg' | 'houseNumber' | 'imageUrl' | 'joined1' | 'joined2' | 'joined3' | 'kidPrice' | 'mapsLink' | 'month' | 'place' | 'price' | 'reviewAmount' | 'starsValue' | 'street' | 'ticketAmount' | 'title'>>;
  createActivityTicket?: Resolver<Maybe<ResolversTypes['ActivityTicket']>, ParentType, ContextType, RequireFields<MutationCreateActivityTicketArgs, 'activityId'>>;
  createManyActivity?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType, Partial<MutationCreateManyActivityArgs>>;
  createManyActivityTicket?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityTicket']>>>, ParentType, ContextType, Partial<MutationCreateManyActivityTicketArgs>>;
  removeActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationRemoveActivityArgs, 'id'>>;
  removeActivityTicket?: Resolver<Maybe<ResolversTypes['ActivityTicket']>, ParentType, ContextType, RequireFields<MutationRemoveActivityTicketArgs, 'id'>>;
  updateActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationUpdateActivityArgs, 'id'>>;
  updateActivityTicket?: Resolver<Maybe<ResolversTypes['ActivityTicket']>, ParentType, ContextType, RequireFields<MutationUpdateActivityTicketArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<QueryActivityArgs, 'id'>>;
  ActivityTicket?: Resolver<Maybe<ResolversTypes['ActivityTicket']>, ParentType, ContextType, RequireFields<QueryActivityTicketArgs, 'id'>>;
  _allActivitiesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllActivitiesMetaArgs>>;
  _allActivityTicketsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllActivityTicketsMetaArgs>>;
  allActivities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType, Partial<QueryAllActivitiesArgs>>;
  allActivityTickets?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityTicket']>>>, ParentType, ContextType, Partial<QueryAllActivityTicketsArgs>>;
};

export type Resolvers<ContextType = any> = {
  Activity?: ActivityResolvers<ContextType>;
  ActivityTicket?: ActivityTicketResolvers<ContextType>;
  ListMetadata?: ListMetadataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

