<?php
/**
 * MedPulse - Backend PHP
 * NOTE: The original code.html contains no PHP.
 * This file is a starter template for server-side integration.
 */

// Example: Book Appointment endpoint
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    header('Content-Type: application/json');

    if ($_POST['action'] === 'book_appointment') {
        $name    = htmlspecialchars($_POST['name'] ?? '');
        $doctor  = htmlspecialchars($_POST['doctor'] ?? '');
        $date    = htmlspecialchars($_POST['date'] ?? '');
        $contact = htmlspecialchars($_POST['contact'] ?? '');

        // TODO: Save to database
        echo json_encode([
            'success' => true,
            'message' => "Appointment booked for $name with $doctor on $date."
        ]);
        exit;
    }

    if ($_POST['action'] === 'emergency_contact') {
        // TODO: Trigger alert / SMS / pager
        echo json_encode(['success' => true, 'message' => 'Emergency team notified.']);
        exit;
    }

    echo json_encode(['success' => false, 'message' => 'Unknown action.']);
    exit;
}
?>
