module com.projectmanager.projectmanagement {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.projectmanager.projectmanagement to javafx.fxml;
    exports com.projectmanager.projectmanagement;
}