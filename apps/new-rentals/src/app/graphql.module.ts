import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache} from "@apollo/client/core";
import {HttpLinkModule, HttpLink} from "apollo-angular-link-http";
import {from} from "apollo-link";

const omitDeep = require('omit-deep-lodash');

export const createApollo = (httpLink: HttpLink) => ({
  link: from([httpLink.create({ uri: 'https://newrentals.onrender.com/api/v1/graphql'})]),
  cache: new InMemoryCache()
});
@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
