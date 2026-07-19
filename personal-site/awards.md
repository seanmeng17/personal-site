---
layout: page
title: Awards
permalink: /awards/
---
<ul class="entry-list">
  {% for item in site.data.awards %}
  <li class="entry">
    <h3 class="entry-title">
      {% if item.link and item.link != "" %}
        <a href="{{ item.link }}" target="_blank" rel="noopener">{{ item.title }}</a>
      {% else %}
        {{ item.title }}
      {% endif %}
    </h3>
    <p class="entry-meta">{{ item.date }}</p>
    <p class="entry-description">{{ item.description }}</p>
  </li>
  {% endfor %}
</ul>
