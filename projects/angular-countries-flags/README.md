# Angular Countries Flags
A super simple angular library for displaying country flag.

### Installation & Usage 
1. Install the package
Run the following command in your angular project to install the package.
```
npm i angular-countries-flags
```
2. Import `AngularCountriesFlagsModule` from `angular-countries-flags` in the module you want to use the flag component.

```
import { AngularCountriesFlagsModule } from 'angular-countries-flags'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCountriesFlagsModule
  ]
  bootstrap: [AppComponent]
})
```
3. Use the component to render flag in component.
```
<flag [code]="'IN'" [size]="'lg'"  [effect]="'round'"></flag>
```
---

### Input Properties
| Property & type | Valid Values | Is Required
| ----------- | ----------- |-----------
| code : string | ISO 3166-1 alpha-2 country code | Yes
| size :string  | `'sm' , 'md' , 'lg' , 'xl'`| No(Default to 'sm')
| effect :string | `'round','sphere','wave','app'` | No
