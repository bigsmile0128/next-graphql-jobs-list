import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Job = {
  __typename?: 'Job';
  cities: Array<Scalars['String']>;
  company: Scalars['String'];
  countries: Array<Scalars['String']>;
  id: Scalars['ID'];
  remotes: Array<Scalars['String']>;
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  job?: Maybe<Job>;
  jobs: Array<Job>;
};


export type QueryJobArgs = {
  id: Scalars['String'];
};

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'Query', jobs: Array<{ __typename?: 'Job', id: string, title: string, slug: string, tags: Array<string>, remotes: Array<string>, company: string, cities: Array<string>, countries: Array<string> }> };


export const GetJobsDocument = gql`
    query getJobs {
  jobs {
    id
    title
    slug
    tags
    remotes
    company
    cities
    countries
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getJobs(variables?: GetJobsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJobsQuery>(GetJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getJobs', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;