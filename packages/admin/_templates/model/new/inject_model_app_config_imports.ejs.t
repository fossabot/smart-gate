---
inject: true
to: src/App.tsx
after: react-admin
---
import { <%- types.map(type =>`${h.changeCase.pascal(Name)}${type},`).join("")%> } from './models/<%= h.changeCase.camel(Name)-%>';
