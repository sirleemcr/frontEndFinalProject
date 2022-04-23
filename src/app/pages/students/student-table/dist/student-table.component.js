"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentTableComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var student_table_datasource_1 = require("./student-table-datasource");
var StudentTableComponent = /** @class */ (function () {
    function StudentTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'kuku'];
        this.dataSource = new student_table_datasource_1.StudentTableDataSource();
    }
    StudentTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], StudentTableComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], StudentTableComponent.prototype, "sort");
    __decorate([
        core_1.ViewChild(table_1.MatTable)
    ], StudentTableComponent.prototype, "table");
    StudentTableComponent = __decorate([
        core_1.Component({
            selector: 'app-student-table',
            templateUrl: './student-table.component.html',
            styleUrls: ['./student-table.component.css']
        })
    ], StudentTableComponent);
    return StudentTableComponent;
}());
exports.StudentTableComponent = StudentTableComponent;
