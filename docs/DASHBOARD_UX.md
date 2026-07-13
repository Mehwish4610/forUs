# Dashboard UX

**Project:** forUs
**Version:** 0.1.0
**Status:** Draft
**Last Updated:** 29 June 2026

---

# Purpose

The Dashboard is the home of the application.

Users should immediately see their rooms, notifications, and quick actions without searching through menus.

The Dashboard should feel welcoming, organized, and fast.

---

# Dashboard Goals

The Dashboard allows users to:

- Create a room
- Join a room
- Open previously created rooms
- Open previously joined rooms
- View notifications
- Access profile
- Access settings

The Dashboard should require minimal learning.

---

# Desktop Layout

------------------------------------------------------------

Top Navigation

------------------------------------------------------------

Sidebar

Main Content

------------------------------------------------------------

Footer (Optional)

------------------------------------------------------------

---

# Mobile Layout

Top Bar

↓

Quick Actions

↓

My Rooms

↓

Joined Rooms

↓

Recent Activity

↓

Bottom Navigation

---

# Design Principles

The Dashboard follows the  Design System.

The layout should be:

- Clean
- Spacious
- Responsive
- Accessible
- Keyboard Friendly

The interface should prioritize frequently used actions.

---

# Welcome Banner

## Purpose

The Welcome Banner is the first thing users see after opening the dashboard.

It should greet the user without taking up excessive space.

---

## Content

Greeting

Good Morning,
Mehwish

(The greeting changes automatically based on the user's local time.)

Supporting Text

Welcome back to forUs.

Ready to start a conversation?

---

## Primary Actions

- Create Room
- Join Room

---

## Design

-  glass card
- Rounded corners
- Soft gradient border
- Minimal illustration on the right
- Responsive layout

---

# Quick Actions

## Purpose

Provide one-click access to the most common actions.

---

## Actions

- Create Room
- Join Room
- Scan QR Code
- Open Command Palette (Desktop)
- Invite Friends

---

## Layout

Desktop

Five equal-sized cards.

Tablet

Two cards per row.

Mobile

Horizontal scroll cards.

---

# My Rooms

## Purpose

Display rooms created by the current user.

---

Each Room Card displays:

- Room Name
- Room Type
- Number of People Here
- Chat Retention Policy
- Last Active
- Room Wallpaper Preview
- Quick Join Button

---

Room Card Actions

- Open Room
- Copy Invite Link
- Share QR Code
- Room Settings
- Delete Room

---

Empty State

You haven't created any rooms yet.

Primary Action

Create Your First Room

---

# Joined Rooms

## Purpose

Display rooms the user has joined.

---

Each card displays:

- Room Name
- Owner
- Last Active
- People Here
- Quick Join

---

Empty State

You haven't joined any rooms yet.

Primary Action

Join a Room

---

# Recent Activity

## Purpose

Help users quickly return to recent conversations.

---

Examples

Alex sent a message.

Study Group became active.

Family Room invitation received.

Gaming Room video call ended.

---

Maximum

10 recent items.

---

# Notifications

Notifications include

- New Messages
- Room Invitations
- Call Invitations
- Room Updates

Unread notifications display a badge.

Notifications never reveal private message content on the dashboard.

---

# Dashboard Goals

The dashboard should answer three questions immediately:

1. What should I do next?

2. Which rooms are active?

3. How do I continue where I left off?

---

# Responsive Behaviour

## Desktop

- Sidebar remains expanded.
- Dashboard sections are displayed in a multi-column layout.
- Command Palette shortcut is visible.
- Search bar remains visible.

---

## Tablet

- Sidebar collapses into icons.
- Dashboard adjusts to a two-column layout.
- Cards resize proportionally.

---

## Mobile

- Sidebar becomes a slide-out drawer.
- Bottom Navigation replaces the desktop sidebar.
- Dashboard becomes a single-column layout.
- Quick Actions become horizontally scrollable.
- Search is accessible from the top bar.

---

# Bottom Navigation (Mobile)

Contains five items:

- Dashboard
- Rooms
- Create
- Notifications
- Profile

The active page should always be highlighted.

---

# Empty States

Every empty state should encourage action.

---

## No Created Rooms

Message

You haven't created any rooms yet.

Primary Action

Create Room

---

## No Joined Rooms

Message

You haven't joined any rooms yet.

Primary Action

Join Room

---

## No Notifications

Message

You're all caught up.

No new notifications.

---

## No Recent Activity

Message

Nothing here yet.

Your recent room activity will appear here.

---

# Loading States

Use skeleton placeholders instead of loading spinners whenever possible.

Skeletons should be provided for:

- Room cards
- Notifications
- Recent Activity
- Welcome Banner

---

# Error States

Display clear, human-friendly messages.

Example

Unable to load your rooms.

Please check your connection and try again.

Provide a Retry button whenever appropriate.

---

# Keyboard Shortcuts (Desktop)

| Shortcut | Action |
|-----------|--------|
| Ctrl/Cmd + K | Open Command Palette |
| / | Focus Search |
| Esc | Close Dialog |
| Ctrl/Cmd + Shift + N | Create Room |
| Ctrl/Cmd + Shift + J | Join Room |

---

# Dashboard Accessibility

Requirements

- Full keyboard navigation.
- Visible focus indicators.
- Screen-reader friendly labels.
- Minimum touch target size of 44px.
- High contrast between text and background.

---

# Dashboard Success Criteria

The dashboard is considered successful if users can:

- Create or join a room within seconds.
- Quickly identify active rooms.
- Resume conversations without confusion.
- Navigate comfortably on desktop, tablet, and mobile.
- Understand the interface without needing instructions.

---

# Summary

The Dashboard serves as the operational hub of forUs.

It prioritizes:

- Simplicity
- Speed
- Privacy
- Accessibility
- Consistency

Every design decision should reinforce these principles.