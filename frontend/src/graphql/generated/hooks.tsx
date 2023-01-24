import * as Types from './operations';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const ActivityCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActivityCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Activity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"kidPrice"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"fullMonth"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"accessible"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"houseNumber"}},{"kind":"Field","name":{"kind":"Name","value":"mapsLink"}},{"kind":"Field","name":{"kind":"Name","value":"starsValue"}},{"kind":"Field","name":{"kind":"Name","value":"reviewAmount"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"hostImg"}},{"kind":"Field","name":{"kind":"Name","value":"joined1"}},{"kind":"Field","name":{"kind":"Name","value":"joined2"}},{"kind":"Field","name":{"kind":"Name","value":"joined3"}},{"kind":"Field","name":{"kind":"Name","value":"bought"}},{"kind":"Field","name":{"kind":"Name","value":"beginTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"ticketAmount"}}]}}]} as unknown as DocumentNode;
export const AllActivitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllActivities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allActivities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActivityCard"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActivityCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Activity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"kidPrice"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"fullMonth"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"accessible"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"houseNumber"}},{"kind":"Field","name":{"kind":"Name","value":"mapsLink"}},{"kind":"Field","name":{"kind":"Name","value":"starsValue"}},{"kind":"Field","name":{"kind":"Name","value":"reviewAmount"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"hostImg"}},{"kind":"Field","name":{"kind":"Name","value":"joined1"}},{"kind":"Field","name":{"kind":"Name","value":"joined2"}},{"kind":"Field","name":{"kind":"Name","value":"joined3"}},{"kind":"Field","name":{"kind":"Name","value":"bought"}},{"kind":"Field","name":{"kind":"Name","value":"beginTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"ticketAmount"}}]}}]} as unknown as DocumentNode;

/**
 * __useAllActivitiesQuery__
 *
 * To run a query within a React component, call `useAllActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<Types.AllActivitiesQuery, Types.AllActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.AllActivitiesQuery, Types.AllActivitiesQueryVariables>(AllActivitiesDocument, options);
      }
export function useAllActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.AllActivitiesQuery, Types.AllActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.AllActivitiesQuery, Types.AllActivitiesQueryVariables>(AllActivitiesDocument, options);
        }
export type AllActivitiesQueryHookResult = ReturnType<typeof useAllActivitiesQuery>;
export type AllActivitiesLazyQueryHookResult = ReturnType<typeof useAllActivitiesLazyQuery>;
export type AllActivitiesQueryResult = Apollo.QueryResult<Types.AllActivitiesQuery, Types.AllActivitiesQueryVariables>;
export const ActivityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Activity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Activity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"kidPrice"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"fullMonth"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"houseNumber"}},{"kind":"Field","name":{"kind":"Name","value":"mapsLink"}},{"kind":"Field","name":{"kind":"Name","value":"accessible"}},{"kind":"Field","name":{"kind":"Name","value":"starsValue"}},{"kind":"Field","name":{"kind":"Name","value":"reviewAmount"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"hostImg"}},{"kind":"Field","name":{"kind":"Name","value":"joined1"}},{"kind":"Field","name":{"kind":"Name","value":"joined2"}},{"kind":"Field","name":{"kind":"Name","value":"joined3"}},{"kind":"Field","name":{"kind":"Name","value":"bought"}},{"kind":"Field","name":{"kind":"Name","value":"beginTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"ticketAmount"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useActivityQuery__
 *
 * To run a query within a React component, call `useActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActivityQuery(baseOptions: Apollo.QueryHookOptions<Types.ActivityQuery, Types.ActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.ActivityQuery, Types.ActivityQueryVariables>(ActivityDocument, options);
      }
export function useActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.ActivityQuery, Types.ActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.ActivityQuery, Types.ActivityQueryVariables>(ActivityDocument, options);
        }
export type ActivityQueryHookResult = ReturnType<typeof useActivityQuery>;
export type ActivityLazyQueryHookResult = ReturnType<typeof useActivityLazyQuery>;
export type ActivityQueryResult = Apollo.QueryResult<Types.ActivityQuery, Types.ActivityQueryVariables>;
export const ActivityStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActivityState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bought"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ticketAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateActivity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"bought"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bought"}}},{"kind":"Argument","name":{"kind":"Name","value":"ticketAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ticketAmount"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActivityCard"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActivityCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Activity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"kidPrice"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"fullMonth"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"accessible"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"houseNumber"}},{"kind":"Field","name":{"kind":"Name","value":"mapsLink"}},{"kind":"Field","name":{"kind":"Name","value":"starsValue"}},{"kind":"Field","name":{"kind":"Name","value":"reviewAmount"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"hostImg"}},{"kind":"Field","name":{"kind":"Name","value":"joined1"}},{"kind":"Field","name":{"kind":"Name","value":"joined2"}},{"kind":"Field","name":{"kind":"Name","value":"joined3"}},{"kind":"Field","name":{"kind":"Name","value":"bought"}},{"kind":"Field","name":{"kind":"Name","value":"beginTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"ticketAmount"}}]}}]} as unknown as DocumentNode;
export type ActivityStateMutationFn = Apollo.MutationFunction<Types.ActivityStateMutation, Types.ActivityStateMutationVariables>;

/**
 * __useActivityStateMutation__
 *
 * To run a mutation, you first call `useActivityStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivityStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activityStateMutation, { data, loading, error }] = useActivityStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      bought: // value for 'bought'
 *      ticketAmount: // value for 'ticketAmount'
 *   },
 * });
 */
export function useActivityStateMutation(baseOptions?: Apollo.MutationHookOptions<Types.ActivityStateMutation, Types.ActivityStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.ActivityStateMutation, Types.ActivityStateMutationVariables>(ActivityStateDocument, options);
      }
export type ActivityStateMutationHookResult = ReturnType<typeof useActivityStateMutation>;
export type ActivityStateMutationResult = Apollo.MutationResult<Types.ActivityStateMutation>;
export type ActivityStateMutationOptions = Apollo.BaseMutationOptions<Types.ActivityStateMutation, Types.ActivityStateMutationVariables>;