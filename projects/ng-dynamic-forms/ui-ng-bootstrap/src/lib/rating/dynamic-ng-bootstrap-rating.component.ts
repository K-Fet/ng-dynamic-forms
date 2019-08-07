import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgbRating, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import {
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicFormControlComponent,
    DynamicRatingModel, DynamicFormControlCustomEvent
} from "@ng-dynamic-forms/core";

@Component({
    selector: "dynamic-ng-bootstrap-rating",
    templateUrl: "./dynamic-ng-bootstrap-rating.component.html"
})
export class DynamicNGBootstrapRatingComponent extends DynamicFormControlComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicRatingModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild(NgbRating, {static: true}) ngbRating: NgbRating;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService,
                public config: NgbRatingConfig) {

        super(layoutService, validationService);
    }
}