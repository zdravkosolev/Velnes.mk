import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themeStyles";
import SearchTreatmentPage from "./pages/SearchTreatmentPage";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SalonPage from "./pages/SalonPage";
import SalonAllServicesPage from "./pages/SalonAllServicesPage";
import SelectEmployeePage from "./pages/SelectEmployeePage";
import ReviewAndConfirmPage from "./pages/ReviewAndConfirmPage";
import AppointmentConfirmedPage from "./pages/AppointmentConfirmedPage";
import SignIn1Page from "./pages/SignIn1Page";
import SignIn2Page from "./pages/SignIn2Page";
import ProfilePage from "./pages/ProfilePage";
import MyAppointmentsPage from "./pages/MyAppointmentsPage";
import UpComAppointmentDetails from "./pages/UpComAppointmentDetailsPage";
import FeedbackFormPage from "./pages/FeedbackFormPage";
import ManageAppointmentsPage from "./pages/ManageAppointmentsPage";
import AddToCalendarPage from "./pages/AddToCalendarPage";
import CancelPage from "./pages/CancelPage";
import MyAppointmentLoyaltyPage from "./pages/MyAppointmentLoyaltyPage";
// import MyMembershipsActivityPage from "./pages/MyMembershipsActivityPage";
import MyFavoritesPage from "./pages/MyFavoritesPage";
import ViewProfilePage from "./pages/ViewProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage";
import ProfileEditPersonalInfoPage from "./pages/ProfileEditPersonalInfoPage";
import ProfileEditNotificationPage from "./pages/ProfileEditNotificationPage";
import ProfilPaymentMethodsPage from "./pages/ProfilPaymentMethodsPage";
import ProfileAddNewCardPage from "./pages/ProfileAddNewCardPage";
import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MyMembershipsNoPage from "./pages/MyMembershipsNoPage";

import { ServicesBookingProvider } from "./Context/BookingContext/ServicesBookingProvider";
import { SalonsDataProvider } from "./Context/SalonsDataContext/SalonsDataProvider";
import SalonAllReviewsPage from "./pages/SalonAllReviewsPage";

function App() {
  const [filterResults, setFilterResults] = useState({
    treatment: "Any",
    date: "Any",
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<HomePage setFilterResults={setFilterResults} />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/view-profile" element={<ViewProfilePage />} />
        <Route
          path="/profile/my-appointments-loyalty"
          element={<MyAppointmentLoyaltyPage />}
        />
        <Route
          path="/profile/my-memberships"
          element={<MyMembershipsNoPage />}
        />
        <Route path="/profile/profile-edit" element={<ProfileEditPage />} />
        <Route
          path="/profile/profile-edit/personal-info"
          element={<ProfileEditPersonalInfoPage />}
        />
        <Route
          path="/profile/profile-edit/notification-settings"
          element={<ProfileEditNotificationPage />}
        />
        <Route
          path="/profile/profile-edit/payment-methods"
          element={<ProfilPaymentMethodsPage />}
        />
        <Route
          path="/profile/profile-edit/payment-methods/add-card"
          element={<ProfileAddNewCardPage />}
        />
        <Route
          path="/search-treatment"
          element={<SearchTreatmentPage setFilterResults={setFilterResults} />}
        />
        <Route
          path="/search-results"
          element={<SearchResultsPage filterResults={filterResults} />}
        />
        <Route path="/salon/:id" element={<SalonPage />} />
        <Route path="/salon/:id/reviews" element={<SalonAllReviewsPage />} />
        <Route path="/salon/:id/services" element={<SalonAllServicesPage />} />
        <Route path="/favorites" element={<MyFavoritesPage />} />
        <Route
          path="/salon/:id/services/booking"
          element={<SelectEmployeePage />}
        />
        <Route
          path="/salon/:id/services/booking/review"
          element={<ReviewAndConfirmPage />}
        />
        <Route
          path="/salon/:id/services/booking/review/confirmation"
          element={<AppointmentConfirmedPage />}
        />
        <Route path="/add-to-calendar" element={<AddToCalendarPage />} />
        <Route path="/my-appointments" element={<MyAppointmentsPage />} />
        <Route
          path="/my-appointments/upcoming-appointments-details/:id"
          element={<UpComAppointmentDetails />}
        />
        <Route
          path="/my-appointments/manage-appointments/:id"
          element={<ManageAppointmentsPage />}
        />
        <Route
          path="/my-appointments/upcoming-appointments-details/:id/feedback"
          element={<FeedbackFormPage />}
        />
        <Route
          path="/my-appointments/manage-appointments/select"
          element={<SelectEmployeePage />}
        />
        <Route
          path="/my-appointments/manage-appointments/:id/cancel"
          element={<CancelPage />}
        />
        <Route path="/signin" element={<SignIn1Page />} />
        <Route path="/signin/auth" element={<SignIn2Page />} />
      </Route>
    )
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <ServicesBookingProvider>
          <SalonsDataProvider>
            <RouterProvider router={router} />
          </SalonsDataProvider>
        </ServicesBookingProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
