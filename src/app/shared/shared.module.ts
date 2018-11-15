import { NgModule } from "@angular/core";
import { CapitalizePipe } from "./capilatize.pipe";


@NgModule({
    declarations: [CapitalizePipe],
    exports: [CapitalizePipe]
})
export class SharedModule{}