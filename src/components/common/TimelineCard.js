import { useTranslation } from "react-i18next";
import React from "react";
import "./timelineCard.css";

const TimelineCard = ({
  period,
  title,
  subtitle,
  highlight,
  description,
  items = [],
  tags = [],
  children,
}) => {
  const { t } = useTranslation();
  return (
    <article className="timeline-card">
      <p className="timeline-period">{period}</p>

      <div className="timeline-details">
        <header className="timeline-header">
          <h3>{title}</h3>

          {subtitle && <p className="timeline-subtitle">{subtitle}</p>}
        </header>

        <div className="timeline-description">
          {highlight && <p className="timeline-highlight">{highlight}</p>}

          {description && <p>{description}</p>}

          {items.length > 0 && (
            <ul className="timeline-items">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {children}

          {tags.length > 0 && (
            <ul
              className="timeline-tags"
              aria-label={t("common.technologies", { title })}
            >
              {tags.map((tag) => (
                <li className="timeline-tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

export default TimelineCard;
