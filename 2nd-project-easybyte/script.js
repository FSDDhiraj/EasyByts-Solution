 
        // Sample event data
        const events = [
            {
                id: 1,
                title: "Summer Music Festival",
                date: "2023-08-15",
                time: "18:00",
                location: "Central Park, New York",
                category: "music",
                price: 45,
                description: "Join us for an unforgettable night of music featuring top artists from around the world. Food trucks and beverages will be available.",
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                capacity: 5000,
                booked: 3870
            },
            {
                id: 2,
                title: "Tech Innovation Conference",
                date: "2023-09-10",
                time: "09:00",
                location: "Convention Center, San Francisco",
                category: "conference",
                price: 199,
                description: "Explore the latest trends in technology with industry leaders. Network with professionals and discover groundbreaking innovations.",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                capacity: 1200,
                booked: 845
            },
            {
                id: 3,
                title: "Yoga & Mindfulness Workshop",
                date: "2023-08-22",
                time: "10:00",
                location: "Wellness Studio, Austin",
                category: "workshop",
                price: 35,
                description: "Learn techniques to reduce stress and improve focus. Suitable for all levels, from beginners to advanced practitioners.",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                capacity: 50,
                booked: 32
            },
            {
                id: 4,
                title: "Marathon City Run",
                date: "2023-10-05",
                time: "07:00",
                location: "Downtown, Chicago",
                category: "sports",
                price: 60,
                description: "Join thousands of runners in this annual city marathon. Choose from full marathon, half marathon, or 5K options.",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                capacity: 10000,
                booked: 7230
            },
            {
                id: 5,
                title: "Jazz Night Live",
                date: "2023-08-30",
                time: "20:00",
                location: "Blue Note Club, New Orleans",
                category: "music",
                price: 25,
                description: "Experience authentic New Orleans jazz with local legends and emerging talents in an intimate setting.",
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                capacity: 200,
                booked: 156
            },
            {
                id: 6,
                title: "Digital Marketing Masterclass",
                date: "2023-09-18",
                time: "13:00",
                location: "Business Hub, Seattle",
                category: "workshop",
                price: 89,
                description: "Learn advanced digital marketing strategies from industry experts. Hands-on exercises and real-world case studies included.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                capacity: 100,
                booked: 67
            }
        ];

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Load events
            renderEvents();
            
            // Set up event listeners
            setupEventListeners();
            
            // Load dashboard data
            loadDashboard();
        });

        // Render events to the page
        function renderEvents(filter = 'all') {
            const container = document.getElementById('eventsContainer');
            container.innerHTML = '';
            
            const filteredEvents = filter === 'all' 
                ? events 
                : events.filter(event => event.category === filter);
            
            if (filteredEvents.length === 0) {
                container.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="bi bi-calendar-x display-1 text-muted"></i>
                        <h3 class="mt-3 text-muted">No events found</h3>
                        <p class="text-muted">Try selecting a different category</p>
                    </div>
                `;
                return;
            }
            
            filteredEvents.forEach(event => {
                const eventCard = createEventCard(event);
                container.appendChild(eventCard);
            });
        }

        // Create an event card element
        function createEventCard(event) {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4';
            
            const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });
            
            col.innerHTML = `
                <div class="card event-card h-100">
                    <div class="position-relative">
                        <img src="${event.image}" class="event-image" alt="${event.title}">
                        <div class="event-date">${formattedDate}</div>
                        <div class="category-badge">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text text-muted flex-grow-1">${event.description.substring(0, 100)}...</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <div>
                                <div><i class="bi bi-geo-alt me-1"></i> ${event.location}</div>
                                <div><i class="bi bi-clock me-1"></i> ${event.time}</div>
                            </div>
                            <div class="text-end">
                                <div class="fw-bold text-primary">$${event.price}</div>
                                <small class="text-muted">${event.capacity - event.booked} spots left</small>
                            </div>
                        </div>
                        <button class="btn btn-primary mt-3 view-details-btn" data-event-id="${event.id}">View Details</button>
                    </div>
                </div>
            `;
            
            return col;
        }

        // Set up event listeners
        function setupEventListeners() {
            // Filter buttons
            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    renderEvents(this.dataset.filter);
                });
            });
            
            // View details buttons (using event delegation)
            document.getElementById('eventsContainer').addEventListener('click', function(e) {
                if (e.target.classList.contains('view-details-btn')) {
                    const eventId = parseInt(e.target.dataset.eventId);
                    showEventDetails(eventId);
                }
            });
            
            // Book event button
            document.getElementById('bookEventBtn').addEventListener('click', function() {
                const eventId = parseInt(this.dataset.eventId);
                bookEvent(eventId);
            });
            
            // Theme toggle
            document.getElementById('themeToggle').addEventListener('click', toggleTheme);
        }

        // Show event details in modal
        function showEventDetails(eventId) {
            const event = events.find(e => e.id === eventId);
            if (!event) return;
            
            const modalBody = document.getElementById('eventModalBody');
            const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="${event.image}" class="img-fluid rounded" alt="${event.title}">
                    </div>
                    <div class="col-md-6">
                        <h4>${event.title}</h4>
                        <p class="text-muted">${event.description}</p>
                        <div class="mb-3">
                            <div><i class="bi bi-calendar-event me-2"></i> ${formattedDate}</div>
                            <div><i class="bi bi-clock me-2"></i> ${event.time}</div>
                            <div><i class="bi bi-geo-alt me-2"></i> ${event.location}</div>
                            <div><i class="bi bi-tag me-2"></i> ${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <span class="h4 text-primary">$${event.price}</span>
                                <span class="text-muted">/ticket</span>
                            </div>
                            <div class="text-end">
                                <div class="fw-bold">${event.capacity - event.booked} spots available</div>
                                <small class="text-muted">Out of ${event.capacity} total</small>
                            </div>
                        </div>
                        <div class="progress mb-3" style="height: 8px;">
                            <div class="progress-bar" role="progressbar" style="width: ${(event.booked / event.capacity) * 100}%"></div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('bookEventBtn').dataset.eventId = eventId;
            
            const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
            eventModal.show();
        }

        // Book an event
        function bookEvent(eventId) {
            const event = events.find(e => e.id === eventId);
            if (!event) return;
            
            // Generate a random booking ID
            const bookingId = 'B' + Math.random().toString(36).substr(2, 9).toUpperCase();
            
            // Create booking object
            const booking = {
                id: bookingId,
                eventId: event.id,
                eventTitle: event.title,
                eventDate: event.date,
                eventTime: event.time,
                eventLocation: event.location,
                bookingDate: new Date().toISOString().split('T')[0],
                price: event.price,
                status: 'confirmed'
            };
            
            // Save to localStorage
            saveBooking(booking);
            
            // Update event booked count (in our sample data)
            event.booked += 1;
            
            // Show confirmation
            showBookingConfirmation(booking);
            
            // Close the event details modal
            const eventModal = bootstrap.Modal.getInstance(document.getElementById('eventModal'));
            eventModal.hide();
            
            // Update dashboard
            loadDashboard();
        }

        // Save booking to localStorage
        function saveBooking(booking) {
            let bookings = JSON.parse(localStorage.getItem('eventBookings') || '[]');
            bookings.push(booking);
            localStorage.setItem('eventBookings', JSON.stringify(bookings));
        }

        // Get all bookings from localStorage
        function getBookings() {
            return JSON.parse(localStorage.getItem('eventBookings') || '[]');
        }

        // Show booking confirmation
        function showBookingConfirmation(booking) {
            const modalBody = document.getElementById('bookingModalBody');
            
            modalBody.innerHTML = `
                <div class="text-center">
                    <i class="bi bi-check-circle-fill text-success display-1 mb-3"></i>
                    <h4>Booking Confirmed!</h4>
                    <p class="mb-3">Your ticket for <strong>${booking.eventTitle}</strong> has been successfully booked.</p>
                    <div class="card ticket-card p-3 mb-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1">${booking.eventTitle}</h6>
                                <small class="text-muted">${new Date(booking.eventDate).toLocaleDateString('en-US')} at ${booking.eventTime}</small>
                            </div>
                            <div class="text-end">
                                <small class="text-muted">Booking ID</small>
                                <div class="fw-bold">${booking.id}</div>
                            </div>
                        </div>
                    </div>
                    <p class="text-muted">You can view and manage your tickets in the Dashboard section.</p>
                </div>
            `;
            
            const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
            bookingModal.show();
        }

        // Load dashboard data
        function loadDashboard() {
            const bookings = getBookings();
            
            // Render booked events
            renderBookedEvents(bookings);
            
            // Render past events
            renderPastEvents(bookings);
        }

        // Render booked events in dashboard
        function renderBookedEvents(bookings) {
            const container = document.getElementById('bookedEventsContainer');
            container.innerHTML = '';
            
            const upcomingBookings = bookings.filter(booking => 
                new Date(booking.eventDate) >= new Date().setHours(0,0,0,0)
            );
            
            if (upcomingBookings.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="bi bi-calendar-x"></i>
                        <h4>No Upcoming Events</h4>
                        <p>You haven't booked any events yet. Explore our events and book your first one!</p>
                        <a href="#events" class="btn btn-primary">Browse Events</a>
                    </div>
                `;
                return;
            }
            
            upcomingBookings.forEach(booking => {
                const event = events.find(e => e.id === booking.eventId);
                if (!event) return;
                
                const bookingCard = createBookingCard(booking, event);
                container.appendChild(bookingCard);
            });
        }

        // Render past events in dashboard
        function renderPastEvents(bookings) {
            const container = document.getElementById('pastEventsContainer');
            container.innerHTML = '';
            
            const pastBookings = bookings.filter(booking => 
                new Date(booking.eventDate) < new Date().setHours(0,0,0,0)
            );
            
            if (pastBookings.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="bi bi-clock-history"></i>
                        <h4>No Past Events</h4>
                        <p>You haven't attended any events through our platform yet.</p>
                    </div>
                `;
                return;
            }
            
            pastBookings.forEach(booking => {
                const event = events.find(e => e.id === booking.eventId);
                if (!event) return;
                
                const bookingCard = createBookingCard(booking, event, true);
                container.appendChild(bookingCard);
            });
        }

        // Create a booking card for dashboard
        function createBookingCard(booking, event, isPast = false) {
            const col = document.createElement('div');
            col.className = 'col-12 mb-3';
            
            const formattedEventDate = new Date(booking.eventDate).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });
            
            col.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-2 text-center">
                                <div class="bg-light rounded p-3">
                                    <div class="fw-bold text-primary">${formattedEventDate}</div>
                                    <small class="text-muted">${booking.eventTime}</small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h5 class="card-title">${booking.eventTitle}</h5>
                                <p class="card-text mb-1"><i class="bi bi-geo-alt me-1"></i> ${booking.eventLocation}</p>
                                <p class="card-text"><i class="bi bi-ticket-perforated me-1"></i> Booking ID: ${booking.id}</p>
                            </div>
                            <div class="col-md-2 text-center">
                                <div class="h5 text-primary">$${booking.price}</div>
                                <span class="badge ${isPast ? 'bg-secondary' : 'bg-success'}">${isPast ? 'Completed' : 'Confirmed'}</span>
                            </div>
                            <div class="col-md-2 text-end">
                                <button class="btn btn-outline-primary view-ticket-btn" data-booking-id="${booking.id}">
                                    <i class="bi bi-eye me-1"></i> View Ticket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            return col;
        }

        // Toggle dark/light theme
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.getElementById('themeToggle');
            
            if (body.getAttribute('data-bs-theme') === 'dark') {
                body.removeAttribute('data-bs-theme');
                themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
            } else {
                body.setAttribute('data-bs-theme', 'dark');
                themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
            }
        }
    