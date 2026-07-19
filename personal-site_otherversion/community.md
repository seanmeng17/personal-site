---
layout: page
title: Community
permalink: /community/
subtitle: "Organizations, mentoring, and service work I'm part of."
---
<div class="photo-grid">
  {% for item in site.data.community %}
  <figure class="photo-card">
    {% if item.link and item.link != "" %}
    <a href="{{ item.link }}" target="_blank" rel="noopener">
      <img src="{{ item.image | relative_url }}" alt="{{ item.description }}" loading="lazy">
    </a>
    {% else %}
    <img src="{{ item.image | relative_url }}" alt="{{ item.description }}" loading="lazy">
    {% endif %}
    <figcaption>
      {{ item.description }}
      {% if item.link and item.link != "" %} · <a href="{{ item.link }}" target="_blank" rel="noopener">visit ↗</a>{% endif %}
    </figcaption>
  </figure>
  {% endfor %}
</div>
