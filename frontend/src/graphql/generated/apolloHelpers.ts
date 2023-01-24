import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ActivityKeySpecifier = ('accessible' | 'age' | 'beginTime' | 'bought' | 'day' | 'description' | 'duration' | 'endTime' | 'fullMonth' | 'hostImg' | 'houseNumber' | 'id' | 'imageUrl' | 'joined1' | 'joined2' | 'joined3' | 'kidPrice' | 'mapsLink' | 'month' | 'place' | 'price' | 'reviewAmount' | 'starsValue' | 'street' | 'ticketAmount' | 'title' | ActivityKeySpecifier)[];
export type ActivityFieldPolicy = {
	accessible?: FieldPolicy<any> | FieldReadFunction<any>,
	age?: FieldPolicy<any> | FieldReadFunction<any>,
	beginTime?: FieldPolicy<any> | FieldReadFunction<any>,
	bought?: FieldPolicy<any> | FieldReadFunction<any>,
	day?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	fullMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	hostImg?: FieldPolicy<any> | FieldReadFunction<any>,
	houseNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	joined1?: FieldPolicy<any> | FieldReadFunction<any>,
	joined2?: FieldPolicy<any> | FieldReadFunction<any>,
	joined3?: FieldPolicy<any> | FieldReadFunction<any>,
	kidPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	mapsLink?: FieldPolicy<any> | FieldReadFunction<any>,
	month?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	starsValue?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	ticketAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityTicketKeySpecifier = ('activityId' | 'id' | ActivityTicketKeySpecifier)[];
export type ActivityTicketFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ListMetadataKeySpecifier = ('count' | ListMetadataKeySpecifier)[];
export type ListMetadataFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createActivity' | 'createActivityTicket' | 'createManyActivity' | 'createManyActivityTicket' | 'removeActivity' | 'removeActivityTicket' | 'updateActivity' | 'updateActivityTicket' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	createActivityTicket?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyActivityTicket?: FieldPolicy<any> | FieldReadFunction<any>,
	removeActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	removeActivityTicket?: FieldPolicy<any> | FieldReadFunction<any>,
	updateActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	updateActivityTicket?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('Activity' | 'ActivityTicket' | '_allActivitiesMeta' | '_allActivityTicketsMeta' | 'allActivities' | 'allActivityTickets' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	Activity?: FieldPolicy<any> | FieldReadFunction<any>,
	ActivityTicket?: FieldPolicy<any> | FieldReadFunction<any>,
	_allActivitiesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_allActivityTicketsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allActivities?: FieldPolicy<any> | FieldReadFunction<any>,
	allActivityTickets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Activity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityKeySpecifier | (() => undefined | ActivityKeySpecifier),
		fields?: ActivityFieldPolicy,
	},
	ActivityTicket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityTicketKeySpecifier | (() => undefined | ActivityTicketKeySpecifier),
		fields?: ActivityTicketFieldPolicy,
	},
	ListMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ListMetadataKeySpecifier | (() => undefined | ListMetadataKeySpecifier),
		fields?: ListMetadataFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;