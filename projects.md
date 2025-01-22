---
layout: default
title: Projects
---
<h1 class="BlogHeader">PROJECTS</h1>
<div class="contentcentering">
  <div class="BlogEntryContainer">
    {% for post in site.projects %}
    <div class="Post">
      <img src="{{ post.image }}" alt="{{ post.alt }}" style="width: 100%; height: auto;">
      <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
      {{ post.tagline }}
    </div>
    {% endfor %}
  </div>
  <a href="javascript:history.back()">
    <div class="returnButton">
      Back
    </div>
  </a>
</div>